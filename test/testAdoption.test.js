const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
  let adoption;
  let expectedPetId;

  before(async () => {
    adoption = await Adoption.deployed();
  });

  describe("adopting a pet and retrieving account address", async () => {
    before("adopt a pet using accounts[0]", async () => {
      await adoption.adopt(8, { from: accounts[0]});
      expectedAdopter = accounts[0];
    });

    it("can fetch the address of an owner by pet id", async () => {
      const adopter = await adoption.adopters(8);//此处是函数不是数组！！！
      assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
    });

    it("can fetch the collection of all pet owners' address", async () => {
      const adopters = await adoption.getAdopters();
      assert.equal(expectedAdopter, adopters[8], "The owner of the adopted should be in the collection.");
    });
  });
});
