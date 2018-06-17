import React from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components';
import slug from 'slug';

const CustomLink = ({ to, children }) => {
  return (
    <Route
      path={to.pathname}
      children={({ match }) => (
        <li style={{listStyleType: 'none', fontWeight: match ? 'bold' : 'normal'}}>
          <LinkStyle to={to}>{children}</LinkStyle>
        </li>
      )}
    />
  )
}

const Sidebar = ({title, list, loading, location, match}) => {
  if (list.length === 0) {
    return <h3>No Users Available</h3>
  }
  return loading === true
    ? <h2>Loading</h2>
    : <div>
        <Heading>{title}</Heading>
        <List>
          {list.map((user) => (
            <CustomLink
              key={user}
              to={{
                pathname: `${match.url}/${slug(user)}`,
                search: location.search
              }}>
                {user.toUpperCase()}
            </CustomLink>
          ))}
        </List>
      </div>
}

const Heading = styled.h3`
  margin: 20px 0;
  font-weight: 300;
  font-size: 35px;
`;

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
  padding: 0;
`;

const LinkStyle = styled(Link)`
  color: #34495e;
  text-decoration: none;
  &:hover {
    color: #718daa
  }
`;

export default Sidebar;
