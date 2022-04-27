import styled from 'styled-components';

interface Ititle {
	textTitle: string;
}

const Title = ({ textTitle }: Ititle) => {
	return <StyledTitle>{textTitle}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
	display: block;
	font-family: 'Inter';
	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 30px;
`;
