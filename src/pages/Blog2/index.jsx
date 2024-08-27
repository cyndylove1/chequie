import rectangle from "../../assets/images/Rectangle (2).png";
import Save from "../../components/Save";
const Blog2 = () =>{
    return(
        <div className="">
            <div className="xl:px-20 md:px-10 px-4">
                <div>
                    <h2 className="md:text-[40px] text-[20px] fw-bold text-[#008A48] text-center pt-10 pb-6">The right saving plan</h2>
                    <img src={rectangle} alt="" />
                </div>
                <div className="flex gap-[3rem] pt-6 md:text-[20px] text-[16px]">
                    <div className="text-[#505050] flex items-center gap-[6px]">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8Z" fill="#505050"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74744 15.4401 5.83015 14.5471 7.07164 13.9327C8.31312 13.3183 9.6798 12.9991 11.065 13C12.4324 12.9984 13.7821 13.3091 15.0111 13.9084C16.2402 14.5077 17.3162 15.3797 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93391 20.0033 6.93014 19.2926 5.328 17.988C5.97281 17.0646 6.83119 16.3107 7.83008 15.7905C8.82896 15.2702 9.93876 14.999 11.065 15C12.1772 14.999 13.2735 15.2635 14.263 15.7713C15.2524 16.2792 16.1064 17.0158 16.754 17.92C15.1395 19.267 13.1026 20.0033 11 20Z" fill="#505050"/>
                        </svg>
                        <h4 className="md:text-[20px]">By Tomiwa Girl</h4>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#505050"/>
                        </svg>
                        <h3>August 14, 2024</h3>
                    </div>

                </div>
                <div className="">
                {Array(2).fill().map(()=>(
                        <div className="md:text-[24px] text-[14px]">
                            <div className="pt-10">
                                <h6>Here are some of the reasons why the savings is vital:</h6>
                            </div>
                            <div className="">
                                <li>It facilitates liquidity management for financial institutions.</li>
                                <li>It provides a platform for short-term borrowing and lending — meeting the funding needs of market <br /> participants.</li>
                                <li>It acts as a benchmark for determining interest rates in the economy.</li>
                                <li>It assists the government in managing its short-term financing requirements and controlling <br /> liquidity levels.</li>
                                <li>It plays a crucial role in influencing monetary policy decisions since the </li>
                                <li>It provides a significant source of investment opportunities for individuals and institutions looking to <br />park their excess funds in low-risk, short-term financial instruments.</li>
                                <li>This list isn’t exhaustive, of course. However, it does highlight the major ways the money market <br /> impacts a country’s financial system.</li>

                            </div>
                            
                            
                        </div>
                    ))}
                </div>
               
            </div>
            <Save/>
            
        </div>
    )
}
export default Blog2;