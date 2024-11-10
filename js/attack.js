class Attack extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" })
        this.weapon = "";
        this.ToHit = "";
        this.extraInfo ="";
    }

    static get observedAttributes() {
        return ["weapon", "DC", "bonusToAttack", "damageType", "damageDice", "damageModifier", "range", "notes"]
    }

    connectedCallback() {
        if( this.getAttribute("weapon") == null) {
            this.weapon ="";
        }else{
            this.weapon = this.getAttribute("weapon");
        }

        if( !( this.getAttribute("bonusToAttack") == "" || this.getAttribute("bonusToAttack") == null)) {
            if(this.getAttribute("bonusToAttack") < 0) {
                this.ToHit = "-" + Math.abs(this.getAttribute("bonusToAttack") );
            }else{
                this.ToHit = "+" + Math.abs(this.getAttribute("bonusToAttack")) ;
            }
        }else if (!( this.getAttribute("DC")  == "" || this.getAttribute("DC") == null)) {
            this.ToHit = "DC" + this.getAttribute("DC");
        }else{
            this.ToHit = "";
        }
        this.getAttribute("damageDice") ? this.damageDice = this.getAttribute("damageDice") : this.damageDice = "";
        this.getAttribute("damageModifier") ? this.damageModifier = "+"+Math.abs(this.getAttribute("damageModifier")) : this.damageModifier = "";
        this.getAttribute("damageType") ? this.damageType = this.getAttribute("damageType") : this.damageType = "";

        if(!( this.getAttribute("range")  == "" || this.getAttribute("range") == null)){
            this.extraInfo += `<span class="extraInfo"> ${this.getAttribute("range")}</span><br/>`
        }
        if(!( this.getAttribute("notes")  == "" || this.getAttribute("notes") == null)){
            this.extraInfo += `<span class="extraInfo"> ${this.getAttribute("notes")}</span><br/>`
        }
        
        this.render(); 
    }

    render() {
        this.shadow.innerHTML =`
        <link rel="stylesheet" href="./style/attack.css"> 
        <details>
            <summary class="attack">
                <span>${this.weapon}</span><span> ${this.ToHit} </span><span> ${this.damageDice} ${this.damageModifier} ${this.damageType}</span>
            </summary>
            <strong>Aditional info:</strong><br/>`+ this.extraInfo +`
        </details>`
    }
}

customElements.define('attack-tag', Attack)