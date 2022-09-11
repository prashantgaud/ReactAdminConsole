import "./featuredInfo.css";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';



export default function FeaturedInfo() {
  return (

<div className="featured">
      
      
      <div className="featuredItem">
       
        <span className="featuredTitle">Revanue</span>
       
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹32,415</span>
          <span className="featuredMoneyRate">
            20 <ArrowDownwardOutlinedIcon  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      
      
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹44,995</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardOutlinedIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹32,995</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardOutlinedIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
