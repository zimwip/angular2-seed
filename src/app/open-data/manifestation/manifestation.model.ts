export class Manifestation {
    datasetid: string;
    recordid: string;
    fields: {
        commune: string,
        tranche_age_enfant?: string,
        descriptif_court: string,
        theme_de_la_manifestation: string,
        categorie_de_la_manifestation: string,
        descriptif_long:string,
        dates_affichage_horaires: string,
        date_fin: string,
        lieu_nom: string,
        reservation_site_inter: string,
        type_de_manifestation: string,
        nom_de_la_manifestation: string,
        identifiant: string,
        date_debut: string,
        code_postal:number
    };
    record_timestamp: string;
}