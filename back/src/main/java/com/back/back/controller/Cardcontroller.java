package com.back.back.controller;


import com.back.back.entities.Card;
import com.back.back.entities.CardModel;
import com.back.back.entities.ImageModel;
import com.back.back.exceptions.ResourceNotFoundException;
import com.back.back.repositories.CardRepository;
import com.back.back.repositories.ImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import static com.back.back.utils.Utils.compressBytes;
import static com.back.back.utils.Utils.decompressBytes;


@CrossOrigin(origins = "*")
@RestController
public class Cardcontroller {

    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private ImageRepository imageRepository;
    //Get all cards
    @GetMapping("/cards")
    public List<Card> getAllCards() {
       return cardRepository.findAll();

    }

    // get image
    @GetMapping(path = { "/cards/getImage/{id}" })
    public ImageModel getImage(@PathVariable("id") Long id) throws IOException {

        final Optional<ImageModel> retrievedImage = imageRepository.findById(id);
        ImageModel img = new ImageModel(retrievedImage.get().getName(), retrievedImage.get().getType(),
                decompressBytes(retrievedImage.get().getPicByte()));
        return img;
    }

   /* @GetMapping(path = { "/cards/getImage/{id}" })
    public ImageModel getImageList(@PathVariable("id") Long id) throws IOException {

        final Optional<ImageModel> retrievedImage = imageRepository.findById(id);
        ImageModel img = new ImageModel(retrievedImage.get().getName(), retrievedImage.get().getType(),
                decompressBytes(retrievedImage.get().getPicByte()));
        return img;
    }*/

    //Get card by id

    @GetMapping("/cards/{id}")
    public ResponseEntity<Card> getCardById(@PathVariable Integer id){
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id :" + id));
        return ResponseEntity.ok(card);
    }

    // Create card

    @PostMapping(value ="/cards",  consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> createCard(@RequestParam("data") String cardData, @RequestParam("file") MultipartFile file) throws IOException {

        System.out.println("Card Data: " + cardData);

        //String to Card object
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Card card = objectMapper.readValue(cardData, Card.class);


            System.out.println("Id: " + card.getId());
            System.out.println("Title: " + card.getTitle());
            System.out.println("Description: " + card.getDescription());

             cardRepository.save(card);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (file != null) {
            // Handle the file
            System.out.println("File Name: " + file.getOriginalFilename());

            ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
                    compressBytes(file.getBytes()));
            imageRepository.save(img);



        }




        return ResponseEntity.ok("Card created successfully");
    }


    // Update card
    @PostMapping("/cards/{id}")
    public ResponseEntity<Card> updateCard(@PathVariable Integer id, @RequestBody Card updateCrad) {
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id :" + id));

        card.setTitle(updateCrad.getTitle());
        card.setDescription(updateCrad.getDescription());
     /*   card.setImage(updateCrad.getImage());*/
        Card updated =cardRepository.save(card);
        return ResponseEntity.ok(updated);

    }

    // Delete card

    @DeleteMapping("/cards/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCard(@PathVariable Integer id){
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id :" + id));
        cardRepository.delete(card);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }







}


