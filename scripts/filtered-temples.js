const temples = [
        {
            name: "Salt Lake Temple",
            location: "Salt Lake City, Utah, USA",
            dedicationDate: "1893-04-06",
            area: 253015,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/500%2C/0/default",
            imageAlt: "Salt Lake Temple"
        },
        {
            name: "Laie Hawaii Temple",
            location: "Laie, Hawaii, USA",
            dedicationDate: "1919-11-27",
            area: 42000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/500%2C/0/default",
            imageAlt: "Laie Hawaii Temple"
        },
        {
            name: "Tegucigalpa Honduras Temple",
            location: "Tegucigalpa, Honduras",
            dedicationDate: "2013-03-17",
            area: 29000,
            imageUrl: "https://churchofjesuschrist.org/imgs/5eafb4407decaf72553241072f38e2003df39658/full/500%2C/0/default",
            imageAlt: "Tegucigalpa Honduras Temple"
        },
        {
            name: "Guatemala City Guatemala Temple",
            location: "Guatemala City, Guatemala",
            dedicationDate: "1984-12-14",
            area: 11000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/4ff985daa77b7f309360c884660244a965f9e8a4/full/500%2C/0/default",
            imageAlt: "Guatemala City Guatemala Temple"
        },
        {
            name: "Freiberg Germany Temple",
            location: "Freiberg, Germany",
            dedicationDate: "1985-06-29",
            area: 8700,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/0dfd23ae4f947c0a0a505e5c142de5ee2c51d91c/full/500%2C/0/default",
            imageAlt: "Freiberg Germany Temple"
        },
        {
            name: "Mexico City Mexico Temple",
            location: "Mexico City, Mexico",
            dedicationDate: "1983-12-02",
            area: 116642,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/500%2C/0/default",
            imageAlt: "Mexico City Mexico Temple"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicationDate: "2019-03-10",
            area: 40600,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default",
            imageAlt: "Rome Italy Temple"
        },
        {
            name: "Tokyo Japan Temple",
            location: "Tokyo, Japan",
            dedicationDate: "1980-10-27",
            area: 52600,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/500%2C/0/default",
            imageAlt: "Tokyo Japan Temple"
        },
        {
            name: "San Pedro Sula Honduras Temple",
            location: "San Pedro Sula, Honduras",
            dedicationDate: "Upcoming",
            area: 17000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/Usqhjku9xyRSHqRwNaqaXs8ONHRjxnruvehdhtcp/full/500%2C/0/default",
            imageAlt: "San Pedro Sula Honduras Temple"
        },
        {
            name: "Logan Utah Temple",
            location: "Logan, Utah, USA",
            dedicationDate: "1884-05-17",
            area: 119619,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/54ac3388abacb11ef04678697a2fc2b6aa0ac4f5/full/500%2C/0/default",
            imageAlt: "Logan Utah Temple"
        }
];
function displayTemples(templesToDisplay) {
    const container = document.getElementById('temple-container');
    container.innerHTML = '';

    templesToDisplay.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';

        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${new Date(temple.dedicationDate).toLocaleDateString()}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.imageAlt}" loading="lazy">
        `;

        container.appendChild(card);
    });
}
displayTemples(temples);
document.getElementById('nav-old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicationDate) < new Date('1900-01-01'));
    displayTemples(oldTemples);
});

document.getElementById('nav-new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicationDate) > new Date('2000-01-01'));
    displayTemples(newTemples);
});

document.getElementById('nav-large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('nav-small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

document.getElementById('nav-home').addEventListener('click', () => {
    displayTemples(temples);
});
