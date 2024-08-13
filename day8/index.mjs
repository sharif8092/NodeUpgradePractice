import {ArgumentParser} from "argparse";

const parser = new ArgumentParser({
    description : "this is just normal description"
})

parser.add_argument('-f','--foo',{help:'enter some value for f and foo'});
parser.add_argument('-g',{help:'enter some value for g'});

let args = parser.parse_args();
console.log(parseInt(args.g) + parseInt(args.f));

// console.log(parseInt(args.g)+parseInt(args.foo));


// console.dir(parser.parse_args())