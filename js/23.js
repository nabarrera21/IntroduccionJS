const metodoPago = "tarjeta";

switch(metododePago){
    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;
        case "cheque":
        console.log("pagaste con cheque");
        break;
        case "efectivo":
        console.log("pagaste con ejectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}