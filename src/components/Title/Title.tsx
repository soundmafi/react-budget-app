import { StyledTitle } from "./styles";

interface Ititle {
	text: string;
}

const Title = ({ text }: Ititle) => {
	return <StyledTitle>{text}</StyledTitle>;
};

export default Title;