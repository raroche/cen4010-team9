import React from "react";

export default function AuthorProfile() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-4 ">
            <img
              src="https://pbs.twimg.com/profile_images/1151868565559156736/8ggbTCKJ_400x400.png"
              alt="avatar"
              class="avatar"
            />
          </div>
          <div class="col-sm-8 mt-3">
            <strong>
              <span>Author Name:</span>
            </strong>
            <span class="ml-2">Deborah Shapiro</span>

            <strong>
              <p class="mt-3">BIO:</p>
            </strong>
            <p>
              Deborah Shapiro was born and raised outside of Boston,
              Massachusetts. She spent a number of years in New York working at
              magazines, including New York and ELLE, and her writing has
              appeared in The New York Times Book Review, Los Angeles Review of
              Books, Sight Unseen, Chicago Magazine, Literary Hub, Washington
              Square Review, and elsewhere. Her first novel, The Sun In Your
              Eyes, was published in 2016. Her new novel, The Summer Demands was
              published by Catapult Books in 2019. She lives with her husband
              and son in Chicago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
