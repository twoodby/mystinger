package com.twoodby.mystringerapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.twoodby.mystringerapp.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private var myStringer: stringer.MyStringer = stringer.MyStringer("")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    override fun onResume() {
        super.onResume()


        // Setup Loading Button
        binding.buttonLoadText.setOnClickListener {
            myStringer = stringer.MyStringer(binding.inputText.text.toString())
            binding.textLoaded.text = binding.inputText.text.toString()
        }

        binding.buttonFlipText.setOnClickListener {
            binding.textOutput.text = myStringer.flipValue()
        }

        binding.buttonCrazyText.setOnClickListener {
            binding.textOutput.text = myStringer.crazyCamel()
        }


    }


}
