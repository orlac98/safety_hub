import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #fff;
padding: 20px;
`;

export const Card = styled.View`
background-color: #f8f8f8f8;
width: 100%;
margin-bottom: 20px;
border-radius: 10px;

`;

export const UserInfo = styled.View`
flex-direction: row;
justify-content: flex-start;
padding: 15px;
`;


export const UserImg = styled.Image`
 width: 50px;
 height: 50px;
 border-radius: 25px;
`;

 export const FileInfo = styled.View`
 flex-direction: column;
 justify-content:center;
 margin-left: 10px;
 `;

export const UserName = styled.Text`
font-size: 14px;
font-family: "Comfortaa-Bold";
`;

export const PostTime = styled.Text`
font-size: 12px;
font-family: 'Comfortaa-Regular';
`;

export const PostText = styled.Text`
font-size: 14px;
font-family: 'Comfortaa-Regular';
padding-left: 15px;
padding-right: 15px;

`;

export const PostImg = styled.Image`
width: 100%;
height: 250px;
margin-top: 15px
`;

export const InteractionWrapper = styled.View`
flex-direction: row;
justify-content: space-around;
padding: 15px;
`;