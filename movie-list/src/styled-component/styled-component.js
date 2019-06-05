import styled from 'styled-components';

const Title = styled.h1`
display:block
text-align:center`

const Ul = styled.ul`
display:flex
justify-content:center
list-style:none
height:320px
`
const Button = styled.button`
display:none;

`
const Li = styled.li`
margin:10px
&:hover ${Button} {
    display:block;
}
`


export { Title,Ul,Li,Button }