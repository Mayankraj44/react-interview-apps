import { PAGE_LIMIT_OPTIONS } from "../../utils/const";

export default function PageLimitDropDown({currentPageLimit,changeCurrentPageLimit}) {
    return (
        <div className="flex justify-end pr-4">
            <p className="mx-4">Page Limit</p>
            <select value={currentPageLimit} onChange={(e) => changeCurrentPageLimit(Number(e.target.value))}>
                {PAGE_LIMIT_OPTIONS.map((value) => <option value={value}>{value}</option>)}

            </select>
        </div>
    )
}