import React from 'react';
import { connect } from 'react-redux';
import { Title,Ul,Li,Button } from '../styled-component/styled-component'


const Recommendations = (props) => {

    const  {recommendationList, myList, handleAdd } = props;
    
        return (
            <React.Fragment>
                <Title>Recommendations</Title>
                <Ul className="myList-posts">
                    {recommendationList.map(
                        item => 
                        <Li key={`recommendationlist-poster-${item.id}`} >
                            <p>{item.title}</p>
                            <img src={item.img} alt={item.title}/>
                            <Button id={`add-${item.id}`} onClick={() => handleAdd(item)}>Add</Button>
                        </Li>)}
                </Ul>
                <Title>My List Title</Title>
                <Ul className="myList-titles">
                    {myList.map(item => <Li key={`mylist-${item.id}`}>{item.title}</Li>)}
                </Ul>
            </React.Fragment>
        )
    
}
const mapStateToProps = state => {
    return {
        recommendationList: state.recommendationList,
        myList:state.myList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: (item) => {
            return dispatch({type: "ADD_TO_MYLIST", item: item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);