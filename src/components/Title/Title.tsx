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

	margin-bottom: 30px;

	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
	text-align: left;
`;
