import React from "react";
import "./template.scss";
import { selectCurrentpage, selectTemplatesPerPage, selectPageTemplates } from "../../redux/slice";
import { useSelector } from "react-redux";

function Templates() {
    const data = useSelector(selectPageTemplates);
    const currentPage = useSelector(selectCurrentpage);
    const templatesPerPage = useSelector(selectTemplatesPerPage);
    const categoryValue = useSelector((state) => state.template.categoryValue);

    const indexOfLastTemplate = currentPage * templatesPerPage;
    const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

    return (
        <div className="templates">
            <div className="templates_categorie">
                <p> {categoryValue} Templates</p>
                <p> {data.length} templates</p>
            </div>
            <div className="template">
                {data?.slice(indexOfFirstTemplate, indexOfLastTemplate)?.map(({ name, description, link }, index) => (
                    <div className="template_card" key={index} data-testid="temp">
                        <div className="template_card_details">
                            <h1 className="template_card_details_title">{name}</h1>
                            <p className="template_card_details_description">{description}</p>
                        </div>
                        <div className="template_card_action">
                            <a href={`#${link}`}>Use Template</a>
                        </div>
                    </div>
                ))}
                {!data.length && <p style={{gridColumn: "1/-1", textAlign:"center", fontWeight:"bold"}}>No result</p>}
            </div>
        </div>
    );
}

export default Templates;
