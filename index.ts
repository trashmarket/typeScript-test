const divide = (dividend: number, divisor: number): number => {
    return dividend / divisor;
  }; 
let hello :boolean = true;

hello = false;
let bigInt: bigint = 100n;
// type 
type TCountry = {
  readonly name:string;
  readonly code:string
};

const country: TCountry = { name: 'Algeria', code: 'DZ' };


type TAffiliations = {
  readonly name: string;
  readonly city: string;
  readonly country: string;
};

const  affiliations: readonly TAffiliations[] = [
  { name: 'Harvard University', city: 'Cambridge, MA', country: 'USA' },
  { name: 'Harvard University', city: 'Cambridge, MA', country: 'USA' }
];


type TPrize = {
  readonly year: string;
  readonly category: string;
  readonly share: string;
  readonly motivation: string;
  readonly affiliations: readonly TAffiliations[]
};

const prizes: readonly TPrize[] = [
  {
    year: '1972',
    category: 'economics',
    share: '2',
    motivation: '"for their pioneering contributions to general economic equilibrium theory and welfare theory"',
    affiliations,
  },
];

type TLaureate = {
 readonly  id: string;
 readonly  firstname: string;
 readonly  surname: string;
 readonly  born: string;
 readonly  died: string;
 readonly  bornCountry: string;
 readonly  bornCountryCode: string;
 readonly  bornCity: string;
 readonly  diedCountry: string;
 readonly  diedCountryCode: string;
 readonly  diedCity:  string;
 readonly  gender: string;
 readonly  prizes: readonly TPrize[]
};
const laureate: TLaureate = {
  id: '682',
  firstname: 'Kenneth J.',
  surname: 'Arrow',
  born: '1921-08-23',
  died: '2017-02-21',
  bornCountry: 'USA',
  bornCountryCode: 'US',
  bornCity: 'New York, NY',
  diedCountry: 'USA',
  diedCountryCode: 'US',
  diedCity: 'Palo Alto, CA',
  gender: 'male',
  prizes,
};