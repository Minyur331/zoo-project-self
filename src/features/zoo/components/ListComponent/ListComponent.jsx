import * as style from './list-component.module.css';

/**
 * 
 * @param {{listData: {cim: string, leiras: string}[]}} param0  
 */
const ListComponent = ({ listData }) => {

    return (
        <ul className={`${style['list-component']}`}>
            {listData.map((item, index) => (
                <li key={index}>
                    <strong>{item.cim}:</strong> {item.leiras}
                </li>
            ))}
        </ul>
    );
};

export default ListComponent;