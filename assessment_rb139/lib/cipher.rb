# Cipher Class is a simple Encoder to encrypt text

class Cipher
  ALPHABET = [*'a'..'z'].freeze

  def self.encode(plaintext)
    r_alphabet = ALPHABET.reverse
    result = []
    idx = 0
    chars = normalize_text(plaintext)
    
    while idx < chars.size
      tmp = ''
      5.times do
        alpha_idx = ALPHABET.find_index(chars[idx])
        if chars[idx]
          tmp += chars[idx].match(/[a-z]/) ? r_alphabet[alpha_idx] : chars[idx]
        end
        idx += 1
      end
      result << tmp
    end
    result.join ' '
  end

  def self.normalize_text(str)
    str.gsub(/\W+/, '').downcase
  end
end
