require('../src/data.js');


/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/

const dataMex = [
  {
    'data': { '1960': '', '2000': 71.9352416992188, '2016': 101.36109161377 },
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Inscripción escolar, nivel secundario, mujeres (% bruto)',
    'indicatorCode': 'SE.SEC.ENRR.FE'
  },
  {
    'data': { '1960': 50.1820696801375, '2010': 50.2311246589852, '2016': 50.2106822126913 },
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  },
  {
    'data': {'1960': '', '2010': '', '2016': '' },
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)',
    'indicatorCode': 'SG.JOB.NOPN.EQ'
  }
];
// Testing filter by theme
// Lo que esperamos que retorne filter
const TagResultList = [
  {
    'data': { '1960': 50.1820696801375, '2010': 50.2311246589852, '2016': 50.2106822126913 },
    'countryName': 'México',
    'countryCode': 'MEX',
    'indicatorName': 'Población, mujeres (% del total)',
    'indicatorCode': 'SP.POP.TOTL.FE.ZS'
  }];
describe('filtrarDataIndicador es una función', () => {
  it('debería ser una función', () => {
    expect(typeof window.filtrarDataIndicador).toBe('function');
  });
  it('returns `debería retornar los indicadores filtrados según code`', () => {
    expect(window.filtrarDataIndicador(dataMex, 'poblacion')).toEqual(TagResultList);
  });
});
// Testing sort by theme
/*  Using
        'data': { '1960': 50.1820696801375, '2010': 50.2311246589852, '2016': 50.2106822126913 },
        'countryName': 'México',
        'countryCode': 'MEX',
        'indicatorName': 'Población, mujeres (% del total)',
        'indicatorCode': 'SP.POP.TOTL.FE.ZS'
*/
const resultIndRange = [
  { 'value': 50.1820696801375, 'year': '1960'},
  { 'value': 50.2311246589852, 'year': '2010'},
  {'value': 101.36109161377, 'year': '2016'}
];
// For sort by year
const yearSort = 'años';
const valueSort = 'valor';
// Order ASC or DSC
// const ascOrder = 'ascendente';
const dscOrder = 'descendente';
const dscAnio = [
  {'value': 50.1820696801375, 'year': '1960' },
  {'value': 50.2311246589852, 'year': '2010'},
  {'value': 101.36109161377, 'year': '2016'}
];
/* const ascAnio = [
  {'value': 101.36109161377, 'year': '2016'},
  {'value': 50.2311246589852, 'year': '2010'},
  {'value': 50.1820696801375, 'year': '1960'}
];*/
const dscValue = [{year: '1960', value: 50.1820696801375}, {year: '2010', value: 50.2311246589852}, {year: '2016', value: 101.36109161377}];
// const ascValue = [{ year: '2016', value: 101.36109161377}, {year: '2010', value: 50.2311246589852}, {year: '1960', value: 50.1820696801375}];
describe('sortData es una función', () => {
  it('debería ser una función', () => {
    expect(typeof window.sortData).toBe('function');
  });
  it('returns `debería retornar un array de objetos ordenados por año de forma descendente`', () => {
    expect(window.sortData(resultIndRange, yearSort, dscOrder)).toEqual(dscAnio);
  });
  /* it.only('returns `debería retornar un array de objetos ordenados por año de forma ascendente`', () => {
    expect(window.sortData(resultIndRange, yearSort, ascOrder)).toEqual(ascAnio); // tal vez xq no en data.js
  }); */
  /* it('returns `debería retornar un array de objetos ordenados por valor de forma ascendente`', () => {
    expect(window.sortData(resultIndRange, valueSort, ascOrder)).toEqual(ascValue);// tal vez xq no en data.js
  }); */
  it('returns `debería retornar un array de objetos ordenados por valor de forma descendente`', () => {
    expect(window.sortData(resultIndRange, valueSort, dscOrder)).toEqual(dscValue);
  });
});
