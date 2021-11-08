import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#aa1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemListContainerGanjil: {
    height: 100,
    backgroundColor: '#49fcd9',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  itemListContainerGenap: {
    height: 100,
    backgroundColor: '#1a0',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListGarisGanjil: {
    backgroundColor: '#a11',
    width: 5,
    height: '80%',
  },
  itemListGarisGenap: {
    backgroundColor: '#dfff3d',
    width: 5,
    height: '80%',
  },
  itemListTXTGanjil: {
    color: '#a11',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
  itemListTXTGenap: {
    color: '#dfff3d',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
});