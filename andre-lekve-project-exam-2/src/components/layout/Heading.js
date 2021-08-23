import PropTypes from "prop-types";

function Heading({ size = "1", content }) {
	const ChangeableHeading = `h${size}`;

	return <ChangeableHeading>{content}</ChangeableHeading>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default Heading;
