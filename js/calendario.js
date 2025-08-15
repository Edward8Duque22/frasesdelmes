const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const diasSemana = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
    const year = new Date().getFullYear();
    const today = new Date();

    function el(id){ return document.getElementById(id); }

    function buildHeader(){
      el("yearBadge").textContent = year;
      tickDown(); 
      setInterval(tickDown, 1000);
    }

    function tickDown(){
      const now = new Date();
      const end = new Date(now); 
      end.setHours(23,59,59,999);
      const ms = Math.max(0, end - now);
      const h = String(Math.floor(ms/3_600_000)).padStart(2,"0");
      const m = String(Math.floor((ms%3_600_000)/60_000)).padStart(2,"0");
      const s = String(Math.floor((ms%60_000)/1000)).padStart(2,"0");
      el("countdown").textContent = `Faltan ${h}h:${m}m:${s}s para la siguiente frase`;
    }

    function render(){
      const wrap = el("wrap");
      wrap.innerHTML = "";
      
      for(let mes=0; mes<12; mes++){
        const card = document.createElement("section");
        card.className = "month-card";
        card.style.animationDelay = `${mes * 0.1}s`; // Añadido para mejor UX

        const head = document.createElement("div");
        head.className = "month-header";
        head.innerHTML = `<div class="month-name">${meses[mes]}</div>`;
        card.appendChild(head);

        const grid = document.createElement("div"); 
        grid.className = "grid";
        
        for(const d of diasSemana){
          const dow = document.createElement("div"); 
          dow.className = "dow"; 
          dow.textContent = d; 
          grid.appendChild(dow);
        }
        
        let firstDow = new Date(year, mes, 1).getDay();
        for(let i=0; i<firstDow; i++){ // Corregido: empezar desde 0
          const spacer = document.createElement("div"); 
          grid.appendChild(spacer); 
        }

        const lastDay = new Date(year, mes+1, 0).getDate();
        for(let dia=1; dia<=lastDay; dia++){
          const date = new Date(year, mes, dia);
          const cell = document.createElement("button");
          cell.className = "cell";
          cell.setAttribute("type","button");
          cell.setAttribute("aria-label", `${dia} de ${meses[mes]}`); // Mejora de accesibilidad

          if(date.getDay()===0 || date.getDay()===6) cell.classList.add("weekend");
          if(date.toDateString() === today.toDateString()) cell.classList.add("today");

          const inFuture = date > today;
          if(inFuture) cell.classList.add("locked");

          const key = `${mes+1}-${dia}`;
          const hasData = !!(frases && frases[key]);
          cell.innerHTML = `<span class="num">${dia}</span>`;
          
          if(hasData){
            const dot = document.createElement("span"); 
            dot.className = "preview-dot"; 
            cell.appendChild(dot);
            const t = document.createElement("div"); 
            t.className = "tooltip"; 
            t.innerHTML = `<div class="t">${frases[key].titulo}</div><div class="p">${(frases[key].texto||'').slice(0,100)}...</div>`;
            cell.appendChild(t);
          }

          cell.addEventListener("click", () => {
            if(inFuture){ 
              shake(cell); 
              return; 
            }
            openModal(mes+1, dia);
          });

          grid.appendChild(cell);
        }

        card.appendChild(grid);
        wrap.appendChild(card);
      }
    }

    function shake(elm){
      elm.style.transition = "transform .08s";
      let i=0;
      const id = setInterval(()=>{
        elm.style.transform = `translateX(${i%2? -3: 3}px)`; // CORREGIDO: template literal
        i++;
        if(i>8){ 
          clearInterval(id); 
          elm.style.transform=""; 
          elm.style.transition = ""; // Resetear transition
        }
      }, 40);
    }

    function openModal(mes, dia){
      const key = `${mes}-${dia}`;
      const data = frases[key]; // Cambio aquí: acceso directo a frases
      
      console.log('Buscando:', key, 'Encontrado:', data); // Debug
      
      const title = data ? data.titulo : 'Es todo, vuelve mañana';
      const texto = data ? data.texto : 'Las frases salen cada día, revisa mañana nuevamente.';
      const img = data ? data.img : null;

      const backdrop = document.getElementById("backdrop");
      const modal = document.getElementById("modal");
      const mImg = document.getElementById("mImg");
      const mTitle = document.getElementById("mTitle");
      const mBody = document.getElementById("mBody");

      if(img && img !== ''){
        mImg.src = img; 
        mImg.style.display="block"; 
        mImg.onerror = function() {
          this.style.display = "none";
          console.log('Error cargando imagen:', img);
        };
      } else { 
        mImg.removeAttribute("src"); 
        mImg.style.display="none"; 
      }

      mTitle.textContent = title;
      mBody.innerHTML = texto;

      backdrop.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("open");
      }, 10); // Pequeño delay para asegurar la animación
      
      document.body.style.overflow = 'hidden';
    }

    function closeModal(){
      const backdrop = document.getElementById("backdrop");
      const modal = document.getElementById("modal");
      modal.classList.remove("open");
      document.body.style.overflow = ''; // Restaurar scroll
      setTimeout(()=>{ 
        backdrop.style.display="none"; 
      }, 250); // Tiempo ajustado para coincidir con la animación
    }

    // Mejorar manejo de teclado
    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape"){ 
        closeModal(); 
      }
    });

    // Inicializar aplicación
    try {
      buildHeader();
      render();
    } catch (error) {
      console.error('Error al inicializar el calendario:', error);
    }