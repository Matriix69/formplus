import { useState } from "react";
import "./header.scss";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";
import Select from "./Select";
import { categoryOptions, dateOptions, orderOptions } from "../../constants/constants";
import { search, sortByCategory, sortByOrder, sortByDate } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.template.searchValue);
    const categoryValue = useSelector((state) => state.template.categoryValue);
    const orderValue = useSelector((state) => state.template.orderValue);
    const dateValue = useSelector((state) => state.template.dateValue);
    const allTemplates = useSelector((state) => state.template.allTemplates);

    return (
        <header>
            <div className="search-container">
                <input
                    placeholder="Search Templates"
                    onChange={({ target }) => dispatch(search(target.value))}
                    value={searchValue}
                    disabled={!allTemplates.length}
                    data-testid="search-field"
                />
                <label>
                    <FiSearch />
                </label>
            </div>

            <div className={"actions-container"} style={toggle ? { maxHeight: "205px" } : {}}>
                <div className="toggle-menu">
                    <p>Sort By:</p>
                    <button onClick={() => setToggle(!toggle)} onKeyDown={() => setToggle(!toggle)}>
                        <HiOutlineChevronDown style={toggle ? { transform: "rotate(180deg)" } : {}} />
                    </button>
                </div>

                <div className="select-container">
                    <span>Sort By:</span>
                    <Select
                        label={"Category"}
                        options={categoryOptions}
                        onChangeHandler={sortByCategory}
                        value={categoryValue}
                        testid={"Category"}
                    />
                    <Select
                        label={"Order"}
                        options={orderOptions}
                        onChangeHandler={sortByOrder}
                        value={orderValue}
                        testid={"Order"}
                    />
                    <Select label={"Date"} options={dateOptions} onChangeHandler={sortByDate} value={dateValue} testid={"Date"} />
                </div>
            </div>
        </header>
    );
}

export default Header;
