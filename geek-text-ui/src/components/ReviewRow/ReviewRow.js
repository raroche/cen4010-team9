import React, { Component } from "react";

export default class ReviewRow extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="mt-5 justify-content-start">
            <ul>
              <li className="boxbg">
                <div>
                  <strong>
                    <span>A stunningly accurate portrayl of friendship</span>
                  </strong>
                  <span>by John Adams</span>
                  <br />
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span>4.7 out of 5 starts</span>
                  <div className="mb-1 mt-4 ">
                    <p>
                      There are parts of this book so poignant they made me
                      weep, but almost none of them had to do with the
                      characters themselves. Instead, they were observations on
                      friendships, relationships, and the vicissitudes of time.
                      I loved that there was so much of this novel that I could
                      relate to - a longterm friendship changed by marriage, a
                      baby, life circumstances. It was a bit hard to personally
                      relate to the wealthy "rock heiress" theme at first, but
                      it's believable in the context of the novel. It's
                      especially so given the characters' meeting at a
                      competitive university in Providence. This book is
                      phenomenal - one of the best I have read in the past year
                      or so. I'm sending a copy to my BFF with whom I have lost
                      regular contact in the past 2 years (after thirty yearsof
                      friendship) with hope we can pick up again.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
