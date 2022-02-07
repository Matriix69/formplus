import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

function Select({ label, options, onChangeHandler, value }) {
    const dispatch = useDispatch();
    const pageTemplates = useSelector((state) => state.template.pageTemplates);

    return (
        <div className="select">
            <label htmlFor="sortCategory" className="sort-label">
                {label}
            </label>

            <select
                className="select-item"
                aria-label="select"
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

export default Select;
