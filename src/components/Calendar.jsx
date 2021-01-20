import '../css/calendar.css';

export default function Calendar() {
    return (
        <div className="calendar">

            <div className="col leftCol">
                <div className="content">
                    <h1 className="date">Friday<span>September 12th</span></h1>
                    <div className="notes">
                        <p>
                            <input type="text" value="" placeholder="new note"/>
                            <span title="Add note" className="addNote animate">+</span>
                        </p>
                        <ul className="noteList">
                            <li>Headbutt a lion<span title="Remove note" className="removeNote animate">x</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col rightCol">
                <div className="content">
                    <h2 className="year">2019</h2>
                    <ul className="months">
                        <li className="Jan"><span>Jan</span></li>
                        <li className="Feb"><span>Feb</span></li>
                        <li className="Mar"><span>Mar</span></li>
                        <li className="Apr"><span>Apr</span></li>
                        <li className="Jun"><span>Jun</span></li>
                        <li className="Jul"><span>Jul</span></li>
                        <li className="Aug"><span>Aug</span></li>
                        <li className="Sep  selected"><span>Sep</span></li>
                        <li className="Oct"><span>Oct</span></li>
                        <li className="Nov"><span>Nov</span></li>
                        <li className="Dec"><span>Dec</span></li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="weekday">
                        <li className="Mon"><span>Mon</span></li>
                        <li className="Tue"><span>Tue</span></li>
                        <li className="Wed"><span>Wed</span></li>
                        <li className="Thu"><span>Thu</span></li>
                        <li className="Fri"><span>Fri</span></li>
                        <li className="Sat"><span>Sat</span></li>
                        <li className="Sun"><span>Sun</span></li>
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="days">
                        <li><span title="1" data-value="1">1</span></li>
                        <li><span title="31" data-value="2">2</span></li>
                        <li><span title="31" data-value="3">3</span></li>
                        <li><span title="31" data-value="4">4</span></li>
                        <li><span title="31" data-value="5">5</span></li>
                        <li><span title="31" data-value="6">6</span></li>
                        <li><span title="31" data-value="7">7</span></li>
                        <li><span title="31" data-value="8">8</span></li>
                        <li><span title="31" data-value="31">31</span></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="clearfix"></div>

    </div>
    )
}