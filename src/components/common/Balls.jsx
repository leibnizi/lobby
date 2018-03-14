
const common = {
  fontSize: '12px',
  backgroundSize: '100%',
  cursor: 'default',
  width: '28px',
  height: '28px',
  textAlign: 'center',
  lineHeight: '28px',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '50%'
}
const red = Object.assign({backgroundColor: '#F45959'}, common)
const blue = Object.assign({backgroundColor: '#51ABF0'}, common)
const green = Object.assign({backgroundColor: '#6ACC7B'}, common)

export const BALLS = {
  '1': red,
  '2': red,
  '3': blue,
  '4': blue,
  '5': green,
  '6': green,
  '7': red,
  '8': red,
  '9': blue,
  '01': red,
  '02': red,
  '03': blue,
  '04': blue,
  '05': green,
  '06': green,
  '07': red,
  '08': red,
  '09': blue,
  '10': blue,
  '11': green,
  '12': red,
  '13': red,
  '14': blue,
  '15': blue,
  '16': green,
  '17': green,
  '18': red,
  '19': red,
  '20': blue,
  '21': green,
  '22': green,
  '23': red,
  '24': red,
  '25': blue,
  '26': blue,
  '27': green,
  '28': green,
  '29': red,
  '30': red,
  '31': blue,
  '32': green,
  '33': green,
  '34': red,
  '35': red,
  '36': blue,
  '37': blue,
  '38': green,
  '39': green,
  '40': red,
  '41': blue,
  '42': blue,
  '43': green,
  '44': green,
  '45': red,
  '46': red,
  '47': blue,
  '48': blue,
  '49': green
}


export const NUMS = {
  'hongbo': ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24', '29', '30', '34', '35', '40', '45', '46'],
  'lvbo': ['05', '06', '11', '16', '17', '21', '22', '27', '28', '32', '33', '38', '39', '43', '44', '49'],
  'lanbo': ['03', '04', '09', '10', '14', '15', '20', '25', '26', '31', '36', '37', '41', '42', '47', '48'],
  'jin': ['01', '06', '11', '16', '21', '26', '31', '36', '41', '46'],
  'mu': ['02', '07', '12', '17', '22', '27', '32', '37', '42', '47'],
  'shui': ['03', '08', '13', '18', '23', '28', '33', '38', '43', '48'],
  'huo': ['04', '09', '14', '19', '24', '29', '34', '39', '44', '49'],
  // 'tu': ['05', '10', '15', '20', '25', '30', '35', '40', '45'],
  // 'shu': ['09', '21', '33', '45'],
  // 'niu': ['08', '20', '32', '44'],
  // 'hu': ['07', '19', '31', '43'],
  // 'tu': ['06', '18', '30', '42'],
  // 'long': ['05', '17', '29', '41'],
  // 'she': ['04', '16', '28', '40'],
  // 'ma': ['03', '15', '27', '39'],
  // 'yang': ['02', '14', '26', '38'],
  // 'hou': ['01', '13', '25', '37', '49'],
  // 'ji': ['12', '24', '36', '48'],
  // 'gou': ['11', '23', '35', '47'],
  // 'zhu': ['10', '22', '34', '46'],
  '0': ['10', '20', '30', '40'],
  '1': ['01', '11', '21', '31', '41'],
  '2': ['02', '12', '22', '32', '42'],
  '3': ['03', '13', '23', '33', '43'],
  '4': ['04', '14', '24', '34', '44'],
  '5': ['05', '15', '25', '35', '45'],
  '6': ['06', '16', '26', '36', '46'],
  '7': ['07', '17', '27', '37', '47'],
  '8': ['08', '18', '28', '38', '48'],
  '9': ['09', '19', '29', '39', '49'],

}