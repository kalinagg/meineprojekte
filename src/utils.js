export const translate = (language, dataBg, dataDe, dataEn) => {
    if (language === 'en') {
        return dataEn;
    }

    if (language === 'bg') {
        return dataBg;
    }

    return dataDe;
}