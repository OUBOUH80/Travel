package com.back.back.entities;


import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "card")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Card implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;



   /* @Column(name = "Image_name")
    private String name;

    @Column(name = "Image_type")
    private String type;

    //image bytes can have large lengths so we specify a value
    //which is more than the default length for picByte column
    @Column(name = "picByte", length = 800000)
    private byte[] picByte;*/

}
