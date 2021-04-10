// reading files
const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));


// writing files
const text = 'hello again, richard';

await Deno.writeFile('readme.txt', text);