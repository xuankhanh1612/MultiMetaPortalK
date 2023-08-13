// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NeoNFT is ERC721 {
    Counters.Counter private _tokenIdCounter;
    using Strings for uint256;
    using Counters for Counters.Counter;
    event NftBought(address _seller, address _buyer, uint256 _price);
    event NewNeoNFT(uint256 NeoNFTId, string name, uint256 dna);

    mapping(uint256 => uint256) public tokenIdToPrice;
    mapping(uint256 => address) public NeoNFTToOwner;
    mapping(address => uint256) public ownerNeoNFTCount;
    mapping(uint256 => address) NeoNFTApprovals;

    address public owner;
    uint256 public balance;
    uint256 public currentIndex;
    string domain;
    uint256 fragments;
    uint256 idOwner;

    struct NeoNFT {
        uint256 index;
        address ownerCreate;
        address owner;
        uint256 price;
        bool listing;
        string uri;
        uint256 idOwner;
        uint256 fragments;
        uint256 indexFragment;
        bool fragmented;
    }

    NeoNFT[] public NeoNFTs;

    constructor() ERC721("NeoNFT", "NNFT") {
        owner = msg.sender;
    }

    function createNFT(string memory uri) external payable {
        require(msg.value == 0.01 ether, "Account not enough ether");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        payable(owner).transfer(msg.value);
        NeoNFTs.push(
            NeoNFT(
                tokenId,
                msg.sender,
                msg.sender,
                0,
                false,
                uri,
                tokenId,
                fragments,
                0,
                false
            )
        );
        NeoNFTToOwner[tokenId] = msg.sender;
        _safeMint(msg.sender, tokenId);
        ownerNeoNFTCount[msg.sender] = ownerNeoNFTCount[msg.sender] + 1;
        currentIndex = currentIndex + 1;
    }

    function fragmentNFT(
        uint256 _number,
        uint256 _id,
        string[] memory _uri
    ) external payable {
        require(msg.value == _number * 0.01 ether, "Account not enough ether");
        NeoNFTs[_id].fragmented = true;
        for (uint32 i = 0; i < _uri.length; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            NeoNFTs.push(
                NeoNFT(
                    tokenId,
                    msg.sender,
                    msg.sender,
                    0,
                    false,
                    _uri[i],
                    _id,
                    _number,
                    i,
                    false
                )
            );
            NeoNFTToOwner[tokenId] = msg.sender;
            _safeMint(msg.sender, tokenId);
            ownerNeoNFTCount[msg.sender] = ownerNeoNFTCount[msg.sender] + 1;
            currentIndex = currentIndex + 1;
        }

        payable(owner).transfer(msg.value);
    }

    function getNFTtoCollection(uint256 _idFragmentidFragment)
        public
        view
        returns (NeoNFT[] memory)
    {
        NeoNFT[] memory result = new NeoNFT[](
            NeoNFTs[_idFragmentidFragment].fragments
        );
        uint256 counter = 0;
        for (uint256 i = 0; i < NeoNFTs.length; i++) {
            if (
                NeoNFTs[i].idOwner != NeoNFTs[i].index &&
                NeoNFTs[i].idOwner == NeoNFTs[_idFragmentidFragment].idOwner
            ) {
                result[counter] = NeoNFTs[i];
                counter++;
            }
        }
        return result;
    }

    function inputDomain(string memory _domain) public returns (string memory) {
        return domain = _domain;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token id is not availble");
        return NeoNFTs[tokenId].uri;
    }

    function disallowBuy(uint256 _tokenId) public {
        require(msg.sender == ownerOf(_tokenId), "Not owner of this token");
        tokenIdToPrice[_tokenId] = 0;
        NeoNFTs[_tokenId].price = 0;
    }

    function allowBuy(uint256 _tokenId, uint256 _price) public {
        require(msg.sender == ownerOf(_tokenId), "Not owner of this token");
        require(_price > 0, "Price zero");
        tokenIdToPrice[_tokenId] = _price;
    }

    function listing(
        uint256 _tokenId,
        uint256 _newPrice,
        string memory _newTypeCoin
    ) public {
        require(
            NeoNFTToOwner[_tokenId] == msg.sender ||
                NeoNFTApprovals[_tokenId] == msg.sender
        );
        allowBuy(_tokenId, _newPrice);
        NeoNFTs[_tokenId].price = _newPrice;
        NeoNFTs[_tokenId].listing = true;
    }

    function unListing(uint256 _tokenId) public {
        disallowBuy(_tokenId);
        NeoNFTs[_tokenId].listing = false;
    }

    function buy(uint256 _tokenId) external payable {
        uint256 price = tokenIdToPrice[_tokenId];
        require(price > 0, "This token is not for sale");
        require(msg.value == price, "Incorrect value");
        address seller = ownerOf(_tokenId);

        _transfer(seller, msg.sender, _tokenId);
        NeoNFTs[_tokenId].owner = msg.sender;
        NeoNFTs[_tokenId].listing = false;

        ownerNeoNFTCount[msg.sender] = ownerNeoNFTCount[msg.sender] + 1 ;
        ownerNeoNFTCount[seller] = ownerNeoNFTCount[seller] - 1;
        NeoNFTToOwner[_tokenId] = msg.sender;

        tokenIdToPrice[_tokenId] = 0; // not for sale anymore
        payable(seller).transfer(msg.value); // send the ETH to the seller
        emit NftBought(seller, msg.sender, msg.value);
    }

    function getAllNFTListing() public view returns (NeoNFT[] memory) {
        NeoNFT[] memory result = new NeoNFT[](currentIndex);
        for (uint256 i = 0; i < NeoNFTs.length; i++) {
            result[i] = NeoNFTs[i];
        }
        return result;
    }

    function getNeoNFTByOwner(address _owner)
        public
        view
        returns (NeoNFT[] memory)
    {
        NeoNFT[] memory result = new NeoNFT[](ownerNeoNFTCount[_owner]);
        uint256 counter = 0;
        for (uint256 i = 0; i < NeoNFTs.length; i++) {
            if (NeoNFTToOwner[i] == _owner) {
                result[counter] = NeoNFTs[i];
                counter++;
            }
        }
        return result;
    }
}
