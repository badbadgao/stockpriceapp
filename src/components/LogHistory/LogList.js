import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { FixedSizeList } from 'react-window';

const renderRow = (props) => {
  const { index, style, data } = props;
  if (data.length === 0) return null;

  const reversedIndex = data.length - index - 1;
  const {updateTime, list} = data[reversedIndex];

  const renderDetails = () => list && list.map(stockPriceUpdate => {
    return (
      <div key={stockPriceUpdate.code}>
        {`${stockPriceUpdate.code} : ${stockPriceUpdate.price}`}
      </div>
    );
  });

  return (
    <ListItem button style={style} key={reversedIndex}>
      <div
        style={{
          diaply: 'flex',
          flexDirection: 'column'
        }}
      >
        <ListItemText primary={`Updates for ${updateTime}`} />
        {renderDetails()}
      </div>
      </ListItem>
  );
}

const LogList = () => {
  const logList = useSelector(state => state.stockPrice.logListData) || [];

  return (
    <FixedSizeList
      itemData={logList}
      height={1000}
      width='100%'
      itemSize={220}
      itemCount={logList.length}>
      {renderRow}
    </FixedSizeList>
  )
};

export default LogList;
