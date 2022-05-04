import { StyledTitle } from "./styles";

interface Ititle {
	textTitle: string;
}

const Title = ({ textTitle }: Ititle) => {
	return <StyledTitle>{textTitle}</StyledTitle>;
};

export default Title;