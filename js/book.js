class ScoreTag extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" })
        this.bonus = 0;
    }

    get score() {
        return this.getAttribute("score");
    }

    set score(score) {
        this.setAttribute("score", score);
    }

    get label() {
        return this.getAttribute("label");
    }

    static get observedAttributes() {
        return ["score", "label"]
    }

    connectedCallback() {
        if(isNaN( this.score) || this.score == null || this.score =="") {
            this.bonus ="<br/>";
            this.score = "<br/>";
        }
        else if (this.score >= 10) {
            this.bonus = "+" + Math.floor((this.score - 10) / 2)
        } else {
            this.bonus = Math.floor((this.score - 10) / 2)
        }

        this.render(); 
    }

    render() {
        this.shadow.innerHTML =`    
        <link rel="stylesheet" href="./style/book.css"> 
        <p class="scoreName">${this.label}</p>
        <div class="bookContainer">
            <svg class="bookborder" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1 5 C 1 3 1 .5 5 .5" stroke-width="2" stroke="black" fill="transparent"></path>
            </svg>
            <p class="book">${ this.score }</p>
            <p class="pageHolder">${ this.bonus }</p>
            <svg class="bookBottomborder" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1 5 C 1 3 1 .5 5 .5" stroke-width="2" stroke="black" fill="transparent"></path>
            </svg>
        </div>`
    }
}

customElements.define('score-tag', ScoreTag)