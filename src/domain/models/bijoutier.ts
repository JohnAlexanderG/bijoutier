export interface Bijoutier {
    id:          string;
    title:       string;
    description: string;
    giftText:    string;
    material:    string;
    price:       number;
    imageURL:    string;
    categorie:   string;
}

export enum Description {
    Empty = "",
    PuedesElegirElColorDelCorazón = "Puedes elegir el color del corazón",
    PuedesElegirLaLetra = "Puedes elegir la letra",
    VirgenDeGuadalupe = "virgen de guadalupe",
}

export enum GiftText {
    AssortedGiftBox = "Assorted gift box",
    Empty = "",
    NaturalStones = "NATURAL STONES",
    WovenEarrings = "WOVEN EARRINGS",
}

export enum Material {
    Empty = "",
    RODIO = "RODIO",
    ACERO = "ACERO",
    PANDORA_ACERO = "PANDORA ACERO",
    DOBLE_ACERO = "DOBLE ACERO",
    BARBARISKA = "BARBARISKA",
    COVERGOLD = "COVERGOLD",
    MOSTACILLA_BRONCE = "MOSTACILLA - BRONCE",
}

export enum Categories {
    Empty = "",
    CHAINS = "CHAINS",
    HOOPS = "HOOPS",
    EARRINGS = "EARRINGS",
    EARCUFF = "EARCUFF",
    MOLES = "MOLES",
    BRACELET = "BRACELET",
    RING = "RING",
    SETS = "SETS",
}
