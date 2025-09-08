const IsPronic = (number) => {
    for (let i = 0; i < number; i++) {
        if (i * (i + 1) == number) {
            return "Is Pronic";
        } 
    }
            return "Is Not Pronic";
};

console.log(IsPronic(20));