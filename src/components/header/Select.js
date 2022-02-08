import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

function Select({ label, options, onChangeHandler, value, testid }) {
    const dispatch = useDispatch();
    const pageTemplates = useSelector((state) => state.template.pageTemplates);

    return (
        <div className="select">
            <label htmlFor="sortCategory" className="sort-label">
                {label}
            </label>

            <select
                className="select-item"
                data-testid={testid}
                onChange={({ target }) => dispatch(onChangeHandler(target.value))}
                value={value}
                disabled={!pageTemplates.length}
            >
                {options.map((option, index) => (
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>

            <HiOutlineChevronDown />
        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    value: PropTypes.string,
    testid: PropTypes.string,
};
export default Select;
