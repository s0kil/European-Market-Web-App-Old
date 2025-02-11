import locations from './_locations.js';

const contents = JSON.stringify(locations.map(location => {
    return {
        location: location.location,
        pageURL: location.pageURL
    };
    // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
}).sort((a, b) => a.location.localeCompare(b.location)));

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}