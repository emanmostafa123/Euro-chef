export interface Chef {
    Identifiant: number,
    Reference:string,
    Description:string,
    Fourinisser:string,
    Prixdachat:string,
    Statut: 'Publie' | 'Archive',
    PrixPublique: string,
    completed?: Date;
}

