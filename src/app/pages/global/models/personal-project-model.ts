

export interface PersonalProjectModel {
    nav: Nav;
    hero: Hero;
    form: Form;
}


export interface Nav{
    img: Img;
    title: string;
    
}

export interface Hero{
    title: string;
    gallery: Img[];
}

export interface Form {
    title: string;
    text: string;
    inputName: string;
    inputNumber: string;
    inputEmail: string;
    inputText: string;

}
export interface Img{
    src: string;
    alt: string;
}

