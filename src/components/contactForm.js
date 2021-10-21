// Render Prop
import React from "react"
import Button from "./button"

export default class ContactForm extends React.Component {
  render() {
    return (
      <div class="center">
        <form netlify>
          <div class="">
            <h1 access="false" id="control-1079174">
              Order Form
            </h1>
          </div>
          <div class="formbuilder-text form-group field-userContactName">
            <label for="userContactName" class="formbuilder-text-label">
              Name
            </label>
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="First Last"
              class="form-control"
              name="userContactName"
              access="false"
              id="userContactName"
              required="required"
              aria-required="true"
            />
          </div>
          <div class="formbuilder-text form-group field-userContactPhoneNumber">
            <label for="userContactPhoneNumber" class="formbuilder-text-label">
              Contact Phone Number
            </label>
            &nbsp;&nbsp;
            <input
              type="tel"
              placeholder="000-000-0000"
              class="form-control"
              name="userContactPhoneNumber"
              access="false"
              maxlength="12"
              id="userContactPhoneNumber"
              title="Phone number we can reach you at. Please use 000-000-0000 format."
              required="required"
              aria-required="true"
            />
          </div>
          <div class="formbuilder-text form-group field-userContactEmailAddress">
            <label for="userContactEmailAddress" class="formbuilder-text-label">
              Contact Email Address
            </label>
            &nbsp;&nbsp;
            <input
              type="email"
              placeholder="name@domain.com"
              class="form-control"
              name="userContactEmailAddress"
              access="false"
              id="userContactEmailAddress"
              title="Email address we may reach you at."
              required="required"
              aria-required="true"
            />
          </div>
          <div class="formbuilder-radio-group form-group field-radio-group-1634720463775">
            <label
              for="radio-group-1634720463775"
              class="formbuilder-radio-group-label"
            >
              Desired Fulfillment
            </label>
            &nbsp;&nbsp;
            <div class="radio-group">
              <div class="formbuilder-radio">
                <input
                  name="radio-group-1634720463775"
                  access="false"
                  id="radio-group-1634720463775-0"
                  value="userFulfillmentPickup"
                  type="radio"
                  checked="checked"
                />
                &nbsp;&nbsp;
                <label for="radio-group-1634720463775-0">Pickup</label>
                &nbsp;&nbsp;
              </div>
              <div class="formbuilder-radio">
                <input
                  name="radio-group-1634720463775"
                  access="false"
                  id="radio-group-1634720463775-1"
                  value="userFulfillmentDelivery"
                  type="radio"
                />
                &nbsp;&nbsp;
                <label for="radio-group-1634720463775-1">Delivery</label>
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
          <div class="formbuilder-text form-group field-userDeliveryLocation">
            <label for="userDeliveryLocation" class="formbuilder-text-label">
              Delivery Location
            </label>
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="123 Main St, Denver, CO 80202"
              class="form-control"
              name="userDeliveryLocation"
              access="false"
              id="userDeliveryLocation"
              title="Where we are taking your sweets to."
            />
          </div>
          <div class="formbuilder-date form-group field-userDesiredFulfillmentDate">
            <label
              for="userDesiredFulfillmentDate"
              class="formbuilder-date-label"
            >
              Desired Date of Delivery/Pickup
            </label>
            &nbsp;&nbsp;
            <input
              type="date"
              class="form-control"
              name="userDesiredFulfillmentDate"
              access="false"
              id="userDesiredFulfillmentDate"
              title="The date you would like to pick up your dessert or have it delivered."
              required="required"
              aria-required="true"
            />
          </div>
          <div class="formbuilder-select form-group field-userMiscDesserts">
            <label for="userMiscDesserts" class="formbuilder-select-label">
              Miscellaneous Desserts
            </label>
            <br></br>
            <select
              class="form-control"
              name="userMiscDesserts[]"
              multiple="true"
              id="userMiscDesserts"
            >
              <option
                value="userMiscDessertCupcakes"
                selected="true"
                id="userMiscDesserts-0"
              >
                Cupcakes
              </option>
              <option
                value="userMiscDessertBreakableHearts"
                id="userMiscDesserts-1"
              >
                Breakable Hearts
              </option>
              <option
                value="userMiscDessertLunchBoxCake"
                id="userMiscDesserts-2"
              >
                Lunch Box Cake
              </option>
              <option
                value="userMiscDessertHotCocoaBombs1"
                id="userMiscDesserts-3"
              >
                Hot Cocoa Bombs (1 each)
              </option>
              <option
                value="userMiscDessertHotCocoaBombs4"
                id="userMiscDesserts-4"
              >
                Hot Cocoa Bombs (4 each)
              </option>
              <option value="userMiscDessertPie" id="userMiscDesserts-5">
                Pie
              </option>
              <option
                value="userMiscDessert8inCheesecake"
                id="userMiscDesserts-6"
              >
                8 in. Cheesecake
              </option>
            </select>
          </div>
          <div class="formbuilder-select form-group field-userCakeSize">
            <label for="userCakeSize" class="formbuilder-select-label">
              Cake Type
            </label>
            <br></br>
            <select
              class="form-control"
              name="userCakeSize[]"
              multiple="true"
              id="userCakeSize"
            >
              <option
                value="userCakeType2Layer"
                selected="true"
                id="userCakeSize-0"
              >
                2 Layer
              </option>
              <option value="userCakeTypeRound" id="userCakeSize-1">
                Round
              </option>
              <option value="userCakeTypeDog" id="userCakeSize-2">
                Canine Birthday
              </option>
            </select>
          </div>
          <div class="formbuilder-select form-group field-userCake2LayerSize">
            <label for="userCake2LayerSize" class="formbuilder-select-label">
              Cake Size (2 Layer)
            </label>
            <br></br>
            <select
              class="form-control"
              name="userCake2LayerSize[]"
              multiple="true"
              id="userCake2LayerSize"
            >
              <option
                value="userCake2LayerSize04"
                selected="true"
                id="userCake2LayerSize-0"
              >
                4 in.
              </option>
              <option value="userCake2LayerSize06" id="userCake2LayerSize-1">
                6 in.
              </option>
              <option value="userCake2LayerSize08" id="userCake2LayerSize-2">
                8 in.
              </option>
              <option value="userCake2LayerSize10" id="userCake2LayerSize-3">
                10 in.
              </option>
              <option value="userCake2LayerSize12" id="userCake2LayerSize-4">
                12 in.
              </option>
            </select>
          </div>
          <div class="formbuilder-select form-group field-userCakeRoundSize">
            <label for="userCakeRoundSize" class="formbuilder-select-label">
              Cake Size (Round)
            </label>
            <br></br>
            <select
              class="form-control"
              name="userCakeRoundSize[]"
              multiple="true"
              id="userCakeRoundSize"
            >
              <option
                value="userCakeRoundSize0406"
                selected="true"
                id="userCakeRoundSize-0"
              >
                4 in. &amp; 6 in.
              </option>
              <option value="userCakeRoundSize0608" id="userCakeRoundSize-1">
                6 in. &amp; 8 in.
              </option>
              <option value="userCakeRoundSize0810" id="userCakeRoundSize-2">
                8 in. &amp; 10 in.
              </option>
              <option value="userCakeRoundSize1012" id="userCakeRoundSize-3">
                10 in. &amp; 12 in.
              </option>
              <option value="userCakeRoundSize040608" id="userCakeRoundSize-4">
                4, 6, &amp; 8 in.
              </option>
              <option value="userCakeRoundSize060810" id="userCakeRoundSize-5">
                6, 8, &amp; 10 in.
              </option>
              <option value="userCakeRoundSize081012" id="userCakeRoundSize-6">
                8, 10, &amp; 12 in.
              </option>
            </select>
          </div>
          <div class="formbuilder-textarea form-group field-userOrderDetails">
            <label for="userOrderDetails" class="formbuilder-textarea-label">
              Additional Details
            </label>
            <br></br>
            <textarea
              type="textarea"
              placeholder="Quantities, flavors, design requests, etc."
              class="form-control"
              name="userOrderDetails"
              access="false"
              id="userOrderDetails"
              title="Quantities, flavors, design requests, etc. should go here."
            ></textarea>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}
