import styled from 'styled-components';

const List = styled.ul`
  
`;

const ListItem = styled.li`
  
`;

export const AdminList = ({ data }) => {

  const listElements = data.map(() => {

  });

  return (
    <List>
      {listElements}
    </List>
  );
};