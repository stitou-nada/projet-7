class Ouvrage{
    #_titre;
    #_auteur;
    #_Prix;
    #_Date;
    #_Type;
    #_Langue;
    #_id;
get titre(){
    return this.#_titre;
}
set titre(value){
    this.#_titre=value;
}
get id(){
    return this.#_id;
}
set id(value){
    this.#_id=value;
}
get auteur(){
    return this.#_auteur;
}
set auteur(value){
    this.#_auteur=value;
}
get Prix(){
    return this.#_Prix;
}
set Prix(value){
    this.#_Prix=value;
}
get Date(){
    return this.#_Date;
}
set Date(value){
    this.#_Date=value;
}
get Type(){
    return this.#_Type;
}
set Type(value){
    this.#_Type=value;
}
get Langue(){
    return this.#_Langue;
}
set Langue(value){
    this.#_Langue=value;
}
    
}