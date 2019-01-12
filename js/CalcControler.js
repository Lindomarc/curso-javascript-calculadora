class CalcController{

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timecEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        
    }

    initialize() {
        this.setDisplayDateTime();
        setInterval( ()=> {
            this.setDisplayDateTime();
        },1000);

    }

    initButtonsEnvents(){

        document.querySelectorAll("#buttons > g, #parts > g");
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timecEl.innerHTML;
    }

    set displayTime(value) {
        return this._timecEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalcEl.innerHTML = value;
    }
    
    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        return this._currentDate.innerHTML = value;
    }

}