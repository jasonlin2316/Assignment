import React from "react";
import { connect } from "react-redux";
import { Title, Ul, Li, Button } from "../styled-component/styled-component";

const MyList = (props) => {
  const { handleRemove, myList } = props;
  return (
    <div>
      <Title>MyList</Title>
      <Ul className="myList-posts">
        {myList.map(item => (
          <Li key={`mylist-poster-${item.id}`}>
            <p>{item.title}</p>
            <img src={item.img} alt={item.title} />
            <Button id={`remove-${item.id}`} onClick={() => handleRemove(item)}>
              remove
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: item => {
      return dispatch({ type: "REMOVE_FROM_MYLIST", item: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);
