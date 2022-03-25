import React from "react";
import "../App.css";

function HomeItems() {
  return (
    <header class="showcase">
      <div class="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
        <a href="#" class="btn btn-rounded">
          Sign In
        </a>
      </div>

      <div class="showcase-content">
        <h1>
          Unlimited movies, TV
          <br /> shows, and more.
        </h1>
        <p class="watch">Watch anywhere. Cancel Anytime</p>
        <p class="areyouready">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <input
            class="btn-xl email"
            type="Email"
            placeholder="Email address"
            name="email"
          />
          <a href="#" class="btn btn-xl getstart" hint="Email">
            Get Started
            <i class="uil uil-angle-right-b"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default HomeItems;
