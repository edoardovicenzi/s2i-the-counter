class Counter{
    constructor(appendTo){
        //appendTo MUST be a node
        if (!appendTo && !appendTo.nodeType){
            console.error("appendTo must be a node element");
            return
        }
        this.counter = 0;
        this.genreateHTML(appendTo);
        this.setEvents();
        this.update();
    }
    setEvents(){
        //I will use event delegation to save myself from future headaches
        this.wrapper.addEventListener("click", (e) => {
            if (e.target.matches("[data-counter-add]")){
                this.addToCounter();
            }
            if (e.target.matches("[data-counter-remove]")){
                this.removeFromCounter();
            }
        })
    }
    genreateHTML(appendTo){
        //appendTo MUST be a node
        if (!appendTo && !appendTo.nodeType){
            console.error("appendTo must be a node element");
            return
        }
        //Create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add("counter-wrapper");
        //Create removeControl
        const removeButton = document.createElement('button');
        removeButton.classList.add("counter-user-control");
        removeButton.setAttribute("data-counter-remove", true);
        removeButton.innerHTML = "-"
        //Create counter
        const counter = document.createElement('div');
        counter.classList.add("counter-value");
        counter.setAttribute("data-counter-value", true);
        //Create addControl
        const addButton = document.createElement('button');
        addButton.classList.add("counter-user-control");
        addButton.setAttribute("data-counter-add", true);
        addButton.innerHTML = "+"

        //append the html elements to wrapper...
        this.wrapper.appendChild(removeButton);
        this.wrapper.appendChild(counter);
        this.wrapper.appendChild(addButton);
        //..then appen wrapper to whatever element you want
        appendTo.appendChild(this.wrapper);
    }

    addToCounter(){
        this.counter ++;
        this.update();
    }
    removeFromCounter(){
        if (this.counter < 1) return
        this.counter --
        this.update();
    }
    update(){
       this.wrapper.querySelector("[data-counter-value]").innerHTML = this.counter
    }
}
const bodyRef = document.querySelector("body");
const counter = new Counter(bodyRef);
